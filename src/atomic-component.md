# Malta Component Design

현재 malta를 구성하는 컴포넌트는,

```
- core
- salesboost
```

되어있는것을 보았으며 각 코드를 구성하는 방식을 읽어보았습니다.

모든 컴포넌트를 구현하고, 디자인 철학을 적용 할수 없지만,디자인 시스템을 구축하는 방식에 대하여 고찰이 필요하다고 생각이 듭니다. 컴포넌트를 구성하는 방식은 여러개가 있을것 같으나, 제가 경험한 재사용성 이 높은 디자인에 대해서 작성 해보려 합니다.

---

## Atomic Component Design

atomic component design 에 대해서 자세하게 더 알고자 하신다면 아래의 참고링크를 통해서 할 수 있습니다.

[참고 링크](http://atomicdesign.bradfrost.com/chapter-2/)

atomic component design은 많은 React Component를 다루는 [예시](https://github.com/diegohaz/arc)들이 많은것 같습니다.

atomic component design을 도입하는데 있어서
가장 중요한것은 **"정답은 없다."** 입니다.

그 이유는 아래와 같습니다.

- 디자인 팀에서 생각하는 Button 과 개발자들이 생각하는 Button 이 다를 수 있습니다.

- 개발자 사이에서도 atom을 나누는 기준에 대해서 서로 대립 관계가 형성 될수 있습니다.

그렇기에 component를 정의하는데 있어서 디자인팀에서 명시 되어 있는 팀내 component design guide를 통해
디자인팀과 컴포넌트화에 대해 1차적으로 논의가 되어야하며,

2차적으로 개발자들과의 커뮤니케이션을 통해서 팀내 가이드를 정하는것이 맞는것 같습니다.

---

### 어떻게 진행 되어야 할까?

개발자내에서 가장 많이 빈번하게 발생하는 경우는 2가지 입니다.

#### 예시 1)atom + atom = molecule 이라는 공식.

: Input Component를 atom component로 만들때,
label, error message 가 포함 되어야 하는것일까?
이미 존재 하는 Text Atom을 Input에 넣게되는게 맞을까?

라는 것에 대해서 팀내에서 맞다 아니다를 정하게 되면,
쉽게 해결된 문제 이지만 이것 또한 팀 가이드를 명확하게 정의 해야 합니다.

#### 예시 2) 컴포넌트가 추가 할때마다 유사한 컴포넌트가 생긴다.

경험담이지만, 많은 개발자가 관리를 하게 되면서 atom을 가볍게 만들게 되는데, 현재 "/src/salesboost"에 있는 IconButton 이 해당 되는 경우 라고 판단이 됩니다. Icon, Button 이라는 존재하는 Atom들에서 새로운 컴포넌트가 생성 되었을때 Atom Component를 정의 내리는 기준은

_"These atoms include basic HTML elements like form labels, inputs, buttons, and others that can’t be broken down any further without ceasing to be functional."_

으로 쉽게 보자면 더이상 쪼개기 힘들고, 한가지의 기능을 가진 기본적인 element라고 정의 내릴수있습니다.

여기서 functional 에 집중하자면, Icon은 하나의 이미지 이며, Button 은 클릭이 가능한 것 이라고 정의를 내릴수 있을것 같습니다.

초기에는 Design, Function 으로 기준을 나누기 모호할때는 기능에 집중하는것이 더 명쾌해 질수 있을것같습니다.

예시)

```js
render() {
  <>
    <Button type="icon" name="arrow" />
    <Button label="Text" />
  </>
}
```

---

#### 예시 3) molecule 관리 방식

실제 개발을 시작하게 되면, malta project 와 실제 service project를 동시에 진행 하다보면, malta project에는 molecule을 다양하게 만드는 경우가 많이 발생하였습니다. 쉽게 예시를 들자면 LabelWithInput 과 InputWithLabel처럼 같은 기능을 하는것이 중복 되는경우가 발생이 됩니다.

이러한 것을 방지하기 위해서는 아래의 방식이 필요합니다.

- 팀의 molecule component 정의
- naming convention

**molecule component?**

_1.molecules are relatively simple groups of UI elements functioning together as a unit._

_2.Creating simple components helps UI designers and developers adhere to the single responsibility principle, an age-old computer science precept that encourages a “do one thing and do it well” mentality._

1개의 기능이 아닌 1가지 성질을 지니고 잇으며, 1가지 성질 만을 하는것을 단일 원칙으로 만드는것을 molecule component 으로 생각하면 될 것 같습니다.

- atom + atom = molecule
- atom + moleclue = molecule

**예시1) naming에는 구성된 컴포넌트 보다는 기능(성질)에 중점을 준다.**

실제로 Refactor를 진행하기전에 molecule folder에 있는 컴포넌트들을 나열 하다보면, 디자인에 따라서 혹은 컴포넌트들의 관계에 따라서 labelWithInput, InputWithLabel 처럼 같은 기능을 가지고 있지만 이름에 따라서 중복되는 경우가 많이 발생합니다.

그렇기에 naming을 할 때는 서비스 에서 쓰이는 UI unit을 구현함을 목표로 하면 될 것 같습니다.

예시)

```js
render() {
  <>
    <Progress type="spinner"/>
    <Progress type="linear" />
    <Progress type="dash-board" />
  <>
}
```

---

#### 예시 4) 실제 프로젝트에선?

실제 프로젝트에서는 비지니스 로직에 집중하게 되면, 공용 컴포넌트 프로젝트를 자주 관리하지 못하는 경우가 많이 생기거나, 비지니스 로직에서 유사 컴포넌트를 직접 제작하는 경우가 발생합니다. 이럴때를 위해서 개발팀 내에서 이슈 발생시 한가지 법칙을 만들면 좋을것 같습니다

**유사하다 판단되는것이 3번이 되면 Refactor하자!**
