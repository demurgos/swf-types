# Next

- **[Breaking change]** Add `em_square_size` field to `DefineFont` ([#42](https://github.com/open-flash/swf-tree/issues/42)).
- **[Fix]** Update `ButtonCond` field order.
- **[Internal]** Update test samples.

### Typescript

- **[Internal]** Update build tools.

# 0.6.0 (2019-04-22)

- **[Breaking change]** Update to MIT/Apache2 license.
- **[Feature]** Define `TagHeader`.
- **[Internal]** Refactor test samples organization.
- **[Internal]** Add `CHANGELOG.md`.

### Rust

- **[Fix]** Skip `control_delta` serialization when `None`.
- **[Fix]** Remove binary-only dependencies from published crate.
- **[Fix]** Update to `swf-fixed@0.1.4`.

### Typescript

- **[Breaking change]** Rename `ClipActions` to `ClipAction` ([#26](https://github.com/open-flash/swf-tree/issues/26)).

# 0.5.0 (2019-04-13)

- **[Breaking change]** Unify `StraightEdge` and `CurvedEdge` into `Edge` as well as their morph counterparts. ([#22](https://github.com/open-flash/swf-tree/issues/22)).

# 0.4.2 (2019-04-05)

### Rust

- **[Feature]** Derive the following traits when applicable: `Copy`, `Clone`, `PartialOrd`, `Ord` and `Hash`.
- **[Feature]** Implement `Default` for matrices.
- **[Fix]** Update to `swf-fixed@0.1.3`.

# 0.4.1 (2019-03-30)

### Rust

- **[Fix]** Export `SoundEnvelope` and `SoundInfo`
- **[Fix]** Update dependencies

# 0.4.0 (2019-03-29)

- **[Feature]** Add definitions for the following tags: `DoAbc`, `ScriptLimits`, `StartSound`, `StartSound2` and `SymbolClass`

### Rust
- **[Feature]** Derive `Copy` trait for simple enums

# 0.3.2 (2019-03-28)

- **[Breaking change]** Refactor sound tags: reorder fields and rename `streamSoundSampleCount` to `streamSampleCount` and `streamSoundCompression` to `streamFormat`.

# 0.2.1 (2019-03-28)

- **[Fix]** Use `Sint32` for `Rect` dimensions