export default {
    plugins: {
        "tailwindcss": {},
        "autoprefixer": {},
        "postcss-pxtorem": {
            rootValue: 16, // 기본 값 (보통 16px)
            unitPrecision: 5,
            propList: ["*"], // 모든 속성에 적용
            selectorBlackList: [], // 특정 셀렉터 제외
            replace: true,
            mediaQuery: false,
        },
    },
};
