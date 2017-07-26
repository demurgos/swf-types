#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Blur {
  pub blur_x: i32,
  pub blur_y: i32,
  pub passes: u8,
}