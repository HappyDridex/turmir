import type { AsyncDataRequestStatus } from '#app';

export type TAsyncDataRequestStatus = AsyncDataRequestStatus;

export enum Status {
  Idle = 'idle',
  Loading = 'pending',
  Succeeded = 'success',
  Failed = 'error',
}
