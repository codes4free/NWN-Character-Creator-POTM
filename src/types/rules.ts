export type SourceStatus = 'verified' | 'needs-verification';

export interface SourceMetadata {
  source: string;
  sourceUrl: string;
  sourceStatus: SourceStatus;
  sourceNotes?: string;
  lastVerified?: string;
}
