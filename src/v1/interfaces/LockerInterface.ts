export enum LockerStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export interface Locker {
  id: number;
  bloqId: number;
  status: LockerStatus;
  isOccupied: boolean;
}
