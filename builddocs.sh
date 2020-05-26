#!/bin/sh

curl -L https://github.com/rust-lang-nursery/mdBook/releases/download/v0.3.0/mdbook-v0.3.0-x86_64-unknown-linux-gnu.tar.gz | tar -xz
./mdbook build docs