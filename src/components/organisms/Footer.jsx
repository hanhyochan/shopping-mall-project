const Footer = () => {
    return (
        <footer className="w-full bg-slate-950 text-gray-400 py-8">
            <div className="flex flex-col md:flex-row justify-between px-6 md:px-20 xl:px-32">
                <div className="flex flex-col w-full md:w-1/3 font-light">
                    <span className="font-semibold">CUSTOMER CENTER</span>
                    <p className="text-4xl">1234-1234</p>
                    <ul className="flex flex-col mt-2">
                        <li>Open: 9:00 - 18:00</li>
                        <li>Lunch: 12:00 - 13:00</li>
                        <li>Sat, Sun, Holiday Off</li>
                    </ul>
                </div>

                <div className="flex flex-col w-full md:w-1/3 font-light mt-4 md:mt-0">
                    <span className="font-semibold">BANK INFO</span>
                    <ul className="flex flex-col mt-2">
                        <li>
                            <strong>은행</strong>: 1234567-1234567
                        </li>
                        <li>
                            <strong>은행</strong>: 1234567-1234567
                        </li>
                        <li>
                            <strong>은행</strong>: 1234567-1234567
                        </li>
                        <li>
                            <strong>은행</strong>: 1234567-1234567
                        </li>
                        <li>
                            <strong>예금주</strong>: (주)MyApp
                        </li>
                    </ul>
                </div>

                {/* ABOUT MyApp */}
                <div className="flex flex-col w-full md:w-1/3 font-light mt-4 md:mt-0">
                    <span className="font-semibold">ABOUT MyApp</span>
                    <ul className="flex flex-col mt-2">
                        <li>MyApp 주식회사</li>
                        <li>
                            <strong>팩스</strong>: 02)1234-1234
                        </li>
                        <li>
                            <strong>주소</strong>: 서울특별시 코딩구 코딩동
                        </li>
                        <li>
                            <strong>통신판매업 신고</strong>: 2024-서울서울-2024
                        </li>
                        <li>
                            <strong>사업자등록번호</strong>: 123-12-12345 <a href="https://example">[사업자정보확인]</a>
                        </li>
                        <li>
                            <strong>개인정보보호책임자</strong>: 홍길동, 전우치 (<a href="mailto:example@example.com">example@example.com</a>)
                        </li>
                        <li>
                            <strong>제휴, 협찬, 유통 문의</strong>: <a href="mailto:example@example.com">example@example.com</a>
                        </li>
                    </ul>
                    <p>Copyright (c) MyApp. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
