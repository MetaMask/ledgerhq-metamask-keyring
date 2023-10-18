// eslint-disable-next-line import/no-unassigned-import
import 'eth-sig-util';

declare module 'eth-sig-util' {
  type MessageTypeProperty = {
    name: string;
    type: string;
  };
  type MessageTypes = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    EIP712Domain: MessageTypeProperty[];
    [additionalProperties: string]: MessageTypeProperty[];
  };
}
