/** The seam for a future GitHub/GitLab-backed repository. The demo UI only depends on this shape. */
export interface RepositoryAdapter<Snapshot = unknown, File = unknown> {
  getProjectHistory(): Promise<Snapshot[]>;
  getSnapshot(version: number): Promise<Snapshot | undefined>;
  getFileHistory(fileId: string): Promise<File[]>;
  compareSnapshots(from: number, to: number): Promise<unknown>;
  getCommitDetails(hash: string): Promise<Snapshot | undefined>;
}

export class MockRepositoryAdapter implements RepositoryAdapter {
  constructor(private readonly snapshots: unknown[]) {}
  async getProjectHistory() { return this.snapshots; }
  async getSnapshot(version: number) { return this.snapshots[version - 1]; }
  async getFileHistory(_fileId: string) { return this.snapshots; }
  async compareSnapshots(from: number, to: number) { return { from, to }; }
  async getCommitDetails(hash: string) { return this.snapshots.find((snapshot: any) => snapshot.hash === hash); }
}
