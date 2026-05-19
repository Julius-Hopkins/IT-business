export type DialogType = 'message' | 'confirm';

export interface DialogData {
  title: string;
  message: string;
  type?: DialogType;
}
