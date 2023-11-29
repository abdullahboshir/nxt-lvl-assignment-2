
##the instruction of how to run locally the application:-
  1.  start:prod-    this script for run row node js.
  2.  start:dev-     this script for run typsript with auto restert
  3.  build-         this is for build js
  4.  lint-          check any error with lint
  5.  lint:fix-      fix all error with the script
  6.  prettier:      this script for code beautify
  7.  prettier:fix-  this srcipt for unbeautify code transform beautify 


total 7 datas. there are userId are 1 to 7- 1,2,3,4,5,6,7


 "scripts":-- 

    "start:prod": "node ./dist/server.js", 
    
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    
    "build": "tsc",
    
    "lint": "eslint --ignore-path .eslintignore --ext .ts",
    
    "lint:fix": "npx eslint src --fix",
    
    "test": "echo \"Error: no test specified\" && exit 1",
    
    "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
    
    "prettier:fix": "npx prettier ---write src"
