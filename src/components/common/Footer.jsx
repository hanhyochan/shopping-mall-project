import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="h-[450px]"></div>
            <div className='absolute bottom-0 left-0 flex items-center justify-center w-full h-96 bg-slate-950'>
                <div className='flex justify-between md:w-[80vw] xl: w-[90vw] text-gray-400'>

                    <div className='flex flex-col justify-between w-1/5 font-light'>
                        <span className='font-semibold'>CUSTOMER CENTER</span>
                        <p className='text-4xl'>1234-1234</p>
                        <ul className='flex flex-col gap-1'>
                            <li>Open: 9:00 - 18:00</li>
                            <li>Lunch: 12:00 - 13:00</li>
                            <li>Sat, Sun, Holiday Off</li>
                        </ul>
                    </div>

                    <div className='flex items-center justify-center w-1/3 border-l border-r'>
                        <div className='flex flex-col justify-between h-full font-light'>
                            <span className='font-semibold'>BANK INFO</span>
                            <p><strong>은행</strong> : 1234567-1234567</p>
                            <p><strong>은행</strong> : 1234567-1234567</p>
                            <p><strong>은행</strong> : 1234567-1234567</p>
                            <p><strong>은행</strong> : 1234567-1234567</p>
                            <p><strong>예금주</strong> : (주)MyApp</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between w-1/3 font-light'>
                        <span className='font-semibold'>ABOUT MyApp</span>
                        <p>MyApp 주식회사</p>
                        <p><strong>팩스</strong> : 02)1234-1234</p>
                        <p><strong>주소</strong> : 서울특별시 코딩구 코딩동</p>
                        <p><strong>통신판매업 신고</strong> : 2024-서울서울-2024</p>
                        <p><strong>사업자등록번호</strong> : 123-12-12345 <a href="https://example">[사업자정보확인]</a></p>
                        <p><strong>개인정보보호책임자</strong> : 홍길동, 전우치 (<a href="mailto:example@example.com">example@example.com</a>)</p>

                        <p><strong>제휴, 협찬, 유통 문의</strong> : <a href="mailto:example@example.com">example@example.com</a></p>

                        <footer>
                            <p>Copyright (c) MyApp. All Rights Reserved.</p>
                        </footer>
                    </div>

                </div>
            </div>
        </>

    );
};

export default Footer;