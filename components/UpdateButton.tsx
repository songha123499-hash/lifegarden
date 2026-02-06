"use client";

export default function UpdateButton() {
  const handleUpdateAlert = () => {
    alert('업데이트 알림을 신청하시겠습니까?\n\n이메일 주소를 입력해주세요.');
  };

  return (
    <button
      className="retro-button"
      style={{ fontSize: '16px', padding: '12px 24px' }}
      onClick={handleUpdateAlert}
      aria-label="플레이아카데미 업데이트 알림 신청"
    >
      <b>📧 업데이트 알림 신청</b>
    </button>
  );
}