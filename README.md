# Manual deploy

```
docker run --rm -v ${PWD}/lambda-rust:/code softprops/lambda-rust
cp ./lambda-rust/target/lambda/release/lambda-rust.zip ./lambda-rust.zip
npm run build
cdk deploy
```

# Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template


