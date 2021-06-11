var store = [{
        "title": "[Raywenderlich] Concurrency 1: 소개",
        "excerpt":"Concurrency란 무엇인가? 회사의 프로젝트를 진행하면서 iOS의 동시성 프로그래밍의 개념 공부가 필요해졌었다. 필요로 했던 기능은 이미지 업로드 서버 요청과 동시에 UI에 업로드 중이라는 변화를 보여줘야하는 기능이었다. 가장 기본적인 내용인 UI는 꼭 Main Thread에서 실행해야한다 정도만 알고 있었고, 어떻게 다른 Thread에게 일을 시키면 되는지 알고 싶어 공부하게 되었다. 책에서는 Concurrency, 동시성을 간단하게...","categories": ["Concurrency"],
        "tags": [],
        "url": "http://localhost:4000/concurrency/Concurrency1/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      },{
        "title": "Hello Swift World!",
        "excerpt":"Hello Swift World! 안녕하세요? 첫번째 포스팅입니다. 앞으로 블로그를 어떻게 운영하면 좋을지에 대한 간략한 소개들 정도 되겠네요. 저는 iOS개발자 입니다. 아직 한참 배울께 많죠. 그래서 아는 것도 다시한번 정리해보는 시간을 갖는 것과 잘못 알고 있는 것을 피드백을 통해 고치려고합니다. 알게된 것들은 구글 검색을 통해 알게되는 것도 있겠지만 공식문서를 기반으로 알아가보려합니다. 매주...","categories": ["시작"],
        "tags": [],
        "url": "http://localhost:4000/%EC%8B%9C%EC%9E%91/Hello-Swift/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      },{
        "title": "JK가 보내주신 개발자의 단계",
        "excerpt":"나의 위치를 가늠해 볼 수 있는 약간의 시야 다음은 JK가 보내주신 포스팅이다. 소프트웨어 개발 업계에 20년정도 있으면서 면접도 수백번 보고 여러 종류의 회사(단순 SW 하청 계약직부터 글로벌 SW기업까지)를 거치다보니 소프트웨어 엔지니어를 보는 개인적인 최소한의 룰(?)이 생긴것이 있는데, 이를 공유해볼까 합니다. 승진에 대한 피드백을 주다보니 자연스럽게 정리가 되더라고요. 매니지먼트 트랙이 아닌...","categories": ["내생각"],
        "tags": [],
        "url": "http://localhost:4000/%EB%82%B4%EC%83%9D%EA%B0%81/myopinion/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      },{
        "title": "[iOS] Layer란?",
        "excerpt":"CALayer의 개념을 알아보자! Layer iOS에서의 모든 뷰는 Layer를 가지고있다. Layer는 UIView에 대한 bitmap정보를 포함하고있다. 이 정보들을 GPU에게 제공하여 그래픽처리의 이점을 가져온다. (OpenGL을 이용한 부드러운 화면처리) OpenGL을 직접적으로 다루기엔 너무 비효율적이다. 작은 일에도 많은양의 코드가 필요한 것도 하나의 이유이다. 이러한 불편점을 도움을 주기위해 Core Graphics는 만들어 졌고, 이걸 좀더 쉽게 사용하기위해...","categories": ["UI"],
        "tags": [],
        "url": "http://localhost:4000/ui/CALayer/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      },{
        "title": "[오브젝트] 1. 객체, 설계",
        "excerpt":"객체, 설계 “이론이 먼저일까, 실무가 먼저일까?” 소프트웨어의 분야는 오랜 역사가 깊지 않기 때문에 이론보다 실무가 먼저이다. 실무가 성숙해지는 시점에 이론이 실무를 추월하는게 보통 정설이다. 객체지향설계의 실무적인 접근을 통해 이론을 배우자. 클래스간 의존성(dependency)이 높으면 결합도(coupling)가 높고 결합도가 높으면, 변화에 취약하다. 클래스를 캡슐화(encapsulation)를 해야한다. 캡슐화는 개념적으로나 물리적으로 객체 내부의 세부적인 사항을 감추는...","categories": ["객체지향"],
        "tags": ["객체","설계"],
        "url": "http://localhost:4000/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8-%EA%B0%9D%EC%B2%B4,-%EC%84%A4%EA%B3%84/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      },{
        "title": "[오브젝트] 2. 객체지향프로그래밍",
        "excerpt":"객체지향 프로그래밍 객체지향 패러다임 → 클래스가 아닌 객체에 초점을 맞춰야한다. 객체…에 집중해야한다. 어떤 객체들이 어떤 상태와 행동을 가지는지 결정한다. 객체는 독립적인 존재가 아니라 기능을 구현하기 위해 협력하는 공동체의 일원이다. 객체들의 모양과 윤곽이 잡히면, 공통된 특성과 상태를 가진 객체들을 타입으로 분류하고 이 타입을 기반으로 클래스를 구현하자. 자율적인 객체 객체는 상태와 행동을...","categories": ["객체지향"],
        "tags": ["프로그래밍","객체지향 프로그래밍"],
        "url": "http://localhost:4000/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      },{
        "title": "[오브젝트] 3. 역할, 책임, 협력",
        "excerpt":"역할, 책임, 협력 객체지향 패러다임의 핵심은 역할(role), 책임(responsibilty), 협력(collaboration)이다. 2장에 있었던 내용들이 안중요한건 아니지만 구현에 너무 치우쳐져 있던 설명이었다. 객체지향 패러다임의 본질과는 조금 거리가 멀다. 객체지향의 본질은 협력하는 객체들의 공동체를 만들어 내는것. → 적절한 객체를 찾고, 적절한 책임을 할당하는 과정에서 만들어진다. 즉, 구현 메커니즘은 이러한 일들이 어느정도 자리를 잡은 후에야...","categories": ["객체지향"],
        "tags": ["프로그래밍","객체지향 프로그래밍"],
        "url": "http://localhost:4000/%EA%B0%9D%EC%B2%B4%EC%A7%80%ED%96%A5/%EC%97%AD%ED%95%A0,-%EC%B1%85%EC%9E%84,-%ED%98%91%EB%A0%A5/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      },{
        "title": "[OS] 1. 프로세스",
        "excerpt":"프로세스 Context Switch CPU가 이 과정을 진행 중일땐 Over Head라 한다. 보조 기억 장치에 저장되어 있는걸 보통 프로그램이라 한다. 이 프로그램이 OS에 의해서 주 기억장치로 올라오게되면(실행하면) 이때부터 프로세스라 불린다. 프로세스 상태 그림 new ready running waiting terminated 프로세스의 상태의 천이는 해당 프로세스가 CPU에 의해 실행이 되고 있을때 혹은 I/O에 의해서...","categories": ["OS"],
        "tags": ["OS","CS"],
        "url": "http://localhost:4000/os/OS-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      },{
        "title": "[iOS] App의 시작점은 어디일까",
        "excerpt":"Interfacbuilder없이 앱 제작 devxoul/RxTodo 스토리보드 없이 앱을 제작해보려하니 기초지식이 많이 부족했다. 그래서 RxTodo 앱을 베이스로 카피캣으로 기초를 다져볼까한다. AppDelegate 일단 AppDelegate 가 무슨일을 하는지 역활부터 정확히 알아보자. 최상단에 import UIKit이 있다. Apple에서 UIKit은 User Interface와 관련된 일을 하는 framework다. AppDelegate에 이게 선언 되었다는건, 유저인터페이스와 관련된게 필요하다는 뜻일 것이다. main은 무엇을...","categories": ["iOS"],
        "tags": ["AppDelegate","UIApplication"],
        "url": "http://localhost:4000/ios/iOS-App%EC%9D%98-%EC%8B%9C%EC%9E%91%EC%A0%90/",
        "teaser": "http://localhost:4000/assets/images/logo.jpg"
      }]
