import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $ButtonCondAction, ButtonCondAction } from "../button/button-cond-action";
import { $ButtonRecord, ButtonRecord } from "../button/button-record";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineButton extends _Tag {
  readonly type: TagType.DefineButton;
  readonly id: Uint16;
  readonly trackAsMenu: boolean;
  // TODO: Rename to records (to match DefineShape)
  readonly characters: ReadonlyArray<ButtonRecord>;
  readonly actions: ReadonlyArray<ButtonCondAction>;
}

export const $DefineButton: DocumentIoType<DefineButton> = new DocumentType<DefineButton>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineButton as TagType.DefineButton})},
    id: {type: $Uint16},
    trackAsMenu: {type: $Boolean},
    characters: {type: new ArrayType({itemType: $ButtonRecord, maxLength: Infinity})},
    actions: {type: new ArrayType({itemType: $ButtonCondAction, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
