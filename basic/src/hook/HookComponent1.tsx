import React, { useEffect } from 'react'

// Hook 함수 :
// - react에서 컴포넌트의 상태와 생명주기에 따른 기능을 수행할 수 있도록 해주는 특별한 함수
// - use 시작하는 함수
// - hook 함수의 종류
// - useState : 컴포넌트의 상태 관리를 가능하게 해주는 함수, 상태 생성, 업데이트, 값에 접근
// - useEffect : 컴포넌트가 렌더린 될 때마다 특정 작업을 수행할 수 있도록 하는 함수, mount, update, unmount 단계에서 수행되는 함수
// - useRef : DOM 요소에 직접 접근하기 위한 함수, 렌더링 사이에 값을 기억하는 함수
// - useContext : 컴포넌트 트리 상에서 전역적으로 상태를 공유하고자 할때 사용하는 함수
// - useReducer : 상태 로직을 관리하는 함수, 상태 없데이트 로직을 컴포넌트 외부로 옮길 수 있게하여 코드관리를 조금 더 수월하게 해줌
// - useCallback : 메모리 내에서 함수를 재사용할 수 있도록 하는 함수
// - useMemo : 메모리에 계산된 값(함수의 결과를 저장하여 함수 재실행 없이 사용할 수 있도록 하는 함수)


export default function HookComponent1() {
    // useEffect :
    // - 컴포넌트의 생명주시에 따라 특정 함수를 수행하도록 하는 훅 함수
    // - useEffect(실행할 함수, 스코프할 상태 배열);

    useEffect(() => {
        console.log('useEffect')
    })

  return (
    <div>HookComponent1</div>
  )
}
