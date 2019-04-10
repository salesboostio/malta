# malta

## NPM publish
1. 모듈을 빌드한다. 모듈이 drawer일 경우
```
yarn workspace @salesboost/drawer build
```

2. npm에 퍼블리시한다
```
cd ./packages/drawer && npm version patch && npm publish
```

3. 퍼블리시 커밋은 따로 작성한다
```
git add packages/drawer/package.json && git commit -m "npm drawer 1.0.xx release"
```

4. 잘못 퍼블리싱되었거나 마이너한 수정이 있을 때는 해당 버전을 unpublish한다. (절대로 버전 넘버 없이 --force 옵션을 붙여서 unpublish 하면 안됨. 패키지가 통째로 날라감)
```
npm unpublish @salesboost/drawer 1.0.xx
```


