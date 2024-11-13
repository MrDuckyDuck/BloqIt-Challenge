export enum RentStatus {
  CREATED = "ACTIVE",
  WAITING_DROPOFF = "WAITING_DROPOFF",
  WAITING_PICKUP = "WAITING_PICKUP",
  DELIVERED = "DELIVERED",
}

export enum RentSize {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

export interface Rent {
  id: number;
  lockerId: number;
  weight: number;
  size: RentSize;
  status: RentStatus;
  droppedOffAt: Date;
  pickedUpAt: Date;
  year: number;
}
