function generateDocs() {
    const name = document.getElementById('name').value || '이름 없음';
    const company = document.getElementById('company').value || '회사명 없음';
    const phone = document.getElementById('phone').value || '전화번호 없음';

    const terms = `이용약관\n\n1. 서비스 소개\n${company}(${name})에서 제공하는 서비스를 이용해주셔서 감사합니다.\n연락처: ${phone}\n\n2. 약관 동의\n본 약관에 동의함으로써 서비스를 이용할 수 있습니다.`;

    const privacy = `개인정보처리방침\n\n1. 수집 항목\n${company}(${name})은 다음의 정보를 수집합니다:\n- 이름: ${name}\n- 전화번호: ${phone}\n\n2. 이용 목적\n서비스 제공 및 연락을 위해 사용됩니다.`;

    document.getElementById('terms-output').textContent = terms;
    document.getElementById('privacy-output').textContent = privacy;
}

function copyText(elementId) {
    const text = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('복사되었습니다!');
    });
}
