import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16, Uint32} from "semantic-types";
import {Rect} from "../rect";
import {SimpleShape} from "../shapes/simple-shape";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {MorphFillStyle} from "./morph-fill-style";
import {MorphLineStyle} from "./morph-line-style";

export interface DefineMorphShape extends _Tag {
  type: TagType.DefineMorphShape;
  characterId: Uint16;
  startBounds: Rect;
  endBounds: Rect;
  offset: Uint32;
  morphFillStyles: MorphFillStyle[];
  morphLineStyles: MorphLineStyle[];
  startEdges: SimpleShape;
  endEdges: SimpleShape;
}

export namespace DefineMorphShape {
  export interface Json {
    type: "define-morph-shape";
    character_id: number;
    start_bounds: Rect.Json;
    end_bounds: Rect.Json;
    offset: number;
    morph_fill_styles: MorphFillStyle[];
    morph_line_styles: MorphLineStyle[];
    start_edges: SimpleShape.Json;
    end_edges: SimpleShape.Json;
  }

  export const type: DocumentType<DefineMorphShape> = new DocumentType<DefineMorphShape>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineMorphShape})},
      characterId: {type: new Int32Type()},
      startBounds: {type: Rect.type},
      endBounds: {type: Rect.type},
      offset: {type: new Int32Type()},
      morphFilleStyles: {type: new ArrayType({itemType: MorphFillStyle.type, maxLength: Infinity})},
      morphLineStyles: {type: new ArrayType({itemType: MorphLineStyle.type, maxLength: Infinity})},
      startEdges: {type: SimpleShape.type},
      endEdges: {type: SimpleShape.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
