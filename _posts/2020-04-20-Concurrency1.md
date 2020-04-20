---
title: "[Raywenderlich] Concurrency 1: 소개"
categories: 
    - Concurrency
---

# Concurrency란 무엇인가?
 회사의 프로젝트를 진행하면서 iOS의 동시성 프로그래밍의 개념 공부가 필요해졌었다. 
필요로 했던 기능은 이미지 업로드 서버 요청과 동시에 UI에 업로드 중이라는 변화를 보여줘야하는 기능이었다.

가장 기본적인 내용인 UI는 꼭 Main Threed에서 실행해야한다. 정도만 알고 있었고, 어떻게 다른 Threed에게 일을 시키면 되는지 알고 싶어 공부하게 되었다.

책에서는 Concurrency, 동시성을 간단하게 말하고 있다.
> "같은 실행시간 동안 앱의 로직이나 랜덤하게 코드가 실행할때, 여전히 정확한 데이터 플로우대로 결과를 보여줘야 한다는 것."

덮붙혀 모던 기기들은 한개 이상의 CPU를 가지고 있기 때문에, Single task 이상의 작업을 같은 시간안에 해결 할 수 있게 되었다. 

Q. 여담으로 A13칩은 몇코어?(6코어...)
![](/assets/images/post-concurreny/1_apple_a13_bionic.jpg){: .align-center}

# 왜 Concurrency를 사용 해야 하는가?
 중요한 이야기다. 앱의 사용성을 높이기 위해서 사용해야한다. 너무 당연한 이야기 아닌가? 만약 MainThreed에서 동시에 여러일을 하게되면 분명히 UI는 프리징 되어 보여질 것!!
동시성을 사용하면서 생길 수 있는 좋은 부작용은 기능을 추가할때 전반적인 설계를 하는데 조금 더 많은 시간이 걸린 다는 것이다.

# 그럼 어떻게 사용하는데?
이게 이 시리즈의 초점이라고한다.(당연한 소'릴...)

이 책을 끝맞치면 이런 스킬들이 생긴단다.

- 높은 수준의 구조를 가진 앱이 같은 시간안에 여러 태스크들을 동시에 실핼 할 수 있게 도와준다. 
- 각자 다른 리소스에 태스크들이 접근을 할때, 공유 리소스는 읽기 전용으로만, 접근이 가능한 다른 쓰레드에서는 좀더 빠른 프로세싱을 할 수 있게 접근을 허용 할 수 있다.

# 결론

당연한 소리를 하고있다.

* 틀린점이나 이상한점이 있다면 제보 감사합니다. :)