export function firebaseError(error) {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return '이미 가입되어 있는 e-mail 입니다.';
    case 'auth/invalid-email':
      return '잘못된 형식의 e-mail 입니다.';
    case 'auth/user-not-found':
      return '등록되지 않은 정보입니다.';
    case 'auth/wrong-password':
      return '비밀번호를 다시 확인 하세요.';
    default:
      return '오류 발생, 관리자에게 문의하세요.';
  }
}
