#!/bin/bash

pm2 start main.js -l logs/all.log -e logs/error.log -o logs/output.log --time
