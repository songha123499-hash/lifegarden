"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-background to-muted/30 border-t border-border py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              문의하기
            </h3>
            <div className="text-lg text-muted-foreground">
              이메일: contact@lifegarden.co.kr
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              문의사항이나 후원 관련 문의는 언제든지 연락주세요.
            </p>
          </div>
          
          <div className="pt-8 border-t border-border">
            <div className="text-sm text-muted-foreground space-y-2">
              <div>Copyright © 2014 라이프가든 All Rights Reserved.</div>
              <div>이사장: 양유승 | 비영리단체 승인 대기중</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}