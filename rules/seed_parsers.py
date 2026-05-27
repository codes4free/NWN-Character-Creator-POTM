import json
import re
from pathlib import Path
from typing import Any


def load_typescript_array(path: Path, export_name: str) -> list[dict[str, Any]]:
    text = path.read_text(encoding="utf-8")
    pattern = re.compile(
        rf"export\s+const\s+{re.escape(export_name)}(?:\s*:\s*[^=]+)?\s*=\s*(\[.*?\]);",
        re.DOTALL,
    )
    match = pattern.search(text)

    if not match:
        raise ValueError(f"Could not find exported array {export_name!r} in {path}")

    return json.loads(_typescript_literal_to_json(match.group(1)))


def _typescript_literal_to_json(literal: str) -> str:
    without_line_comments = re.sub(r"(?m)^\s*//.*$", "", literal)
    with_quoted_keys = re.sub(
        r"([{\s,])([A-Za-z_][A-Za-z0-9_]*)\s*:",
        r'\1"\2":',
        without_line_comments,
    )
    with_double_quoted_strings = re.sub(
        r"'([^'\\]*(?:\\.[^'\\]*)*)'",
        lambda match: json.dumps(match.group(1)),
        with_quoted_keys,
    )
    return re.sub(r",\s*([}\]])", r"\1", with_double_quoted_strings)
