# 높은 사용성을 위한 구현

1. styled-component css 활용
2. required Props & type-check
3. defaultProps

## styled-component
transition, css 에서 자주 사용되는 것을 function처럼 관리해도 좋을것 같습니다.

: keyframes (fade-in,out)
: flex center(justify-content: 'center', align-items: 'center')

이유는 같은 코드를 반복되는것을 방지하고 관리측면에서 높힐수 있기 때문입니다. 유사한 방식의 코드는 Framer에서 React에서 동작하는 [Motion](https://www.framer.com/motion/)이라는 라이브러리를 만들었습니다. 이 라이브버리 처럼 애니메이션,디자인 관련된 컴포넌트를 component로 만들어도 좋을것같습니다.

## required Props & type-check
현재 atom, salesboost 에서 구성된 컴포넌트의 경우에 optional props를 통해서 선언이 되어있는것을 보았습니다.

typescript를 쓰기 때문에 ts의 장점인 type-check를 활용하여서 개발팀 논의를 통해서 required props가 없을때 error가 나온다면 코드를 작성할때 발생할수있는 간단한 에러를 방지할수 있을것 같습니다.

예시 1)
```js

interface InputProps {
 onChange: () => void;
 type: String;
 value: String;
};

const Input = styled(input)<InputProps>``;

Input.defaultProps = {
  type: 'text'
};
```

예시2)
- Button onClick


## DefaultProps
코드를 보면서 느꼈던것은, styled-system을 사용하면서 혼동없는 props를 통해서 개발자가 평소 inline style code처럼 작성을 하는것이 장점으로 판단이 됩니다. 여기서, 더 나아가면 기존의 해당 스타일에서 기존 default value는 defaultProps을 통해서 입력을 하지 않아도 될 것 같습니다.


예시1)
- Flex : {direction: "row"}
- Input: {type: "text"}