
const examSearch = document.getElementById('examSearch');
const classFilter = document.getElementById('classFilter');
const examRows = Array.from(
    document.querySelectorAll('#examTableBody tr')
);
const examEmpty = document.getElementById('examEmpty');

function filterExams() {
    const searchText = examSearch.value.trim().toLowerCase();
    const selectedStage = classFilter.value;
    let visibleCount = 0;

    examRows.forEach((row) => {
        const matchesText = row.textContent
            .toLowerCase()
            .includes(searchText);

        const stages = row.dataset.stage.split(' ');

        const matchesStage =
            selectedStage === 'all' ||
            stages.includes(selectedStage);

        const showRow = matchesText && matchesStage;

        row.hidden = !showRow;

        if (showRow) {
            visibleCount++;
        }
    });

    examEmpty.style.display =
        visibleCount === 0 ? 'block' : 'none';
}

examSearch.addEventListener('input', filterExams);
classFilter.addEventListener('change', filterExams);
