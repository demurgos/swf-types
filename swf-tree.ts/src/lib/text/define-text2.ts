import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../matrix";
import {Rect} from "../rect";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {TextRecord} from "./text-record";

export interface DefineText2 extends _Tag {
  type: TagType.DefineText2;
  characterId: Uint16;
  textBounds: Rect;
  textMatrix: Matrix;
  textRecords: TextRecord[];
}

export namespace DefineText2 {
  export interface Json {
    type: "define-text2";
    character_id: number;
    text_bounds: Rect.Json;
    text_matrix: Matrix.Json;
    text_records: TextRecord.Json[];
  }

  export const type: DocumentType<DefineText2> = new DocumentType<DefineText2>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineText2})},
      characterId: {type: new Int32Type()},
      textBounds: {type: Rect.type},
      textMatrix: {type: Matrix.type},
      fontBoundsTable: {type: new ArrayType({itemType: TextRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
