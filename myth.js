function toggleAnswer(answerId) {
    const answer = document.getElementById(answerId);
    if (answer) {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
}
