export enum BloqStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface Bloq {
  id: number;
  title: string;
  address: string;
  status: BloqStatus;
}
