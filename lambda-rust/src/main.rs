use std::error::Error;
use lambda_runtime::{Context, error::HandlerError, lambda};
use log::{self, error};
use simple_error::bail;
use simple_logger;
use serde_derive::{Deserialize, Serialize};

#[derive(Deserialize)]
struct CustomEvent {
    first_name: String,
}

#[derive(Serialize)]
struct CustomOutput {
    message: String,
}


fn main() -> Result<(), Box<dyn Error>> {
    simple_logger::init_with_level(log::Level::Debug)?;
    lambda!(my_handler);
    Ok(())
}

fn my_handler(e: CustomEvent, c: Context) -> Result<CustomOutput, HandlerError> {
    if e.first_name == "" {
        error!("Empty first name is request {}", c.aws_request_id);
        bail!("Empty first name");
    }

    Ok(CustomOutput {
        message: format!("Hello, {}!", e.first_name),
    })
}