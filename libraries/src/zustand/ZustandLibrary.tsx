import React, { useState } from 'react'
import { create } from 'zustand';

// zustand 패키지(라이브러리) :
// - react에서 사용할 수 있는 상태 관리 라이브러리 중 하나
// - 상태 관리 라이브러리 중 Redux 라이브러리가 현재 가장 많이 사용됨
// - Redux의 고질적인 문제점으로 복잡한 코드 구조와 높은 학습 곡선을 요구
// - Zustand는 단순한 코드 구조와 학습 곡선이 매우 낮음 - useState 사용 수준의 학습 곡선을 요구
// - Redux, MobX 와 같은 타 상태관리 라이브러리들에 비해 번들의 크기가 가벼움 - 빌드할 때 패키징 속도 향상 / 빌드 후 번들의 크기가 작아짐

// npm i zustand

// zustand를 이용한 글로벌 상태 선언 방법
// 1. zustand의 create 함수를 사용하여 store를 생성
// store : 상태와 상태 관리 로직을 하나로 묶은 객체
// store 생성하는 create 함수의 반환 데이터는 훅 함수를 반환 (use라는 이름의 함수명으로 받아야함)

// - create 함수의 매개변수로 set 인자를 받는 콜백 함수를 전달해야함
// - 매개변수로 전달한 콜백 함수는 store 객체를 반환해야함
// - store 객체는 상태, store 객체를 변경하는 함수가 포함됨

// - typescript에서 zustand의 create 함수를 사용할때는 create 함수의 제너릭으로 store의 타입을 지정해야함
interface Store {
    zNormal: number;
    setZNormal: (zNormal: number) => void;
    increaseZNormal: () => void;
    decreaseZNormal: () => void;
}

// create 함수의 콜백 함수가 받는 set 인자는 상태 변경을 위한 함수
const useStore = create<Store>((set) => ({
        zNormal: 0,
        // set 함수는 매개변수로 현재 상태(state)를 인자로 받는 콜백 함수를 전달해야함
        // set 함수의 매개변수로 전달된 콜백 함수는 상태객체(store)를 반환해야함
        setZNormal: (zNormal) => set(state => ({ ...state, zNormal })),
        increaseZNormal: () => set(state => ({ ...state, zNormal: state.zNormal + 1 })),
        decreaseZNormal: () => set(state => ({ ...state, zNormal: state.zNormal - 1}))
    }));

export default function ZustandLibrary() {

    // useState를 이용한 상태 선언 방법
    const [normal, setNormal] = useState<number>(0);

    const changeNormal = (normal: number) => {
        setNormal(normal);
    }

    const increaseNormal = () => {
        setNormal(normal + 1);
    }

    const decreaseNormal = () => {
        setNormal(normal - 1);
    }

    // zustand로 선언한 상태 사용
    // const { 상태들, 상태 변경 함수들 } = useStoreZustand훅함수()
    const { zNormal, setZNormal, increaseZNormal, decreaseZNormal } = useStore();

    return (
        <div>
            <a href='http://localhost:3000/router'>홈으로</a>
            <div>
                <h4>useState 방식 : {normal}</h4>
                <button onClick={decreaseNormal}>-</button>
                <button onClick={increaseNormal}>+</button>
            </div>
            <div>
                <h4>zustand 방식 : {zNormal}</h4>
                <button onClick={decreaseZNormal}>-</button>
                <button onClick={increaseZNormal}>+</button>
            </div>
            <SubComponent1 normal={normal} increaseNormal={increaseNormal} decreaseNormal={decreaseNormal} />
            <SubComponent2 />
        </div>
    );
}

interface Sub1Props {
    normal: number;
    increaseNormal: () => void;
    decreaseNormal: () => void;
}

function SubComponent1 ({ normal, increaseNormal, decreaseNormal }: Sub1Props) {
    return (
        <div>
            <h5>Normal : {normal}</h5>
            <button onClick={decreaseNormal}>-</button>
            <button onClick={increaseNormal}>+</button>
        </div>
    )
}

function SubComponent2 () {

    const { zNormal, increaseZNormal, decreaseZNormal } = useStore();

    return (
        <div>
            <h5>Zustand : {zNormal}</h5>
            <button onClick={decreaseZNormal}>-</button>
            <button onClick={increaseZNormal}>+</button>
        </div>
    )
}