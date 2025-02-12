const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const todayBtn = document.getElementById('today-btn');
const monthYearElement = document.getElementById('month-year');
const calendarGrid = document.getElementById('calendar-grid');
const calendar = document.getElementById('calendar');

const monthBackgrounds = [
    'url(https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1000&h=1000&fit=crop)',
    'url(https://images.unsplash.com/photo-1517867065801-e20f409696b0?w=1000&h=1000&fit=crop)',
    'url(https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?w=1000&h=1000&fit=crop)',
    'url(https://plus.unsplash.com/premium_photo-1707229723342-1dc24b80ffd6?w=1000&h=1000&fit=crop)',
    'url(https://images.unsplash.com/photo-1473594659356-a404044aa2c2?w=1000&h=1000&fit=crop)',
    'url(https://images.unsplash.com/photo-1586902197503-e71026292412?w=1000&h=1000&fit=crop)',
    'url(https://images.unsplash.com/photo-1584653084755-59a2401f7031?w=1000&h=1000&fit=crop)',
    'url(https://indianexpress.com/wp-content/uploads/2018/08/india1.jpg)',
    'url(https://plus.unsplash.com/premium_photo-1679766027818-6f5b572dabb2?w=1000&h=1000&fit=crop)',
    'url(https://images.unsplash.com/photo-1654582801704-3005878f59b7?w=1000&h=1000&fit=crop)',
    'url(https://plus.unsplash.com/premium_photo-1722945689852-0bcf3669b894?w=1000&h=1000&fit=crop)',
    'url(https://plus.unsplash.com/premium_photo-1701454736122-14b846cfb3c3?w=1000&h=1000&fit=crop)'
];

let currentDate = new Date();

function createDayElement(day, year, month) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.textContent = day;

    dayDiv.addEventListener('mouseenter', () => {
        dayDiv.classList.add('hover');
    });

    dayDiv.addEventListener('mouseleave', () => {
        dayDiv.classList.remove('hover');
    });

    if (new Date().toDateString() === new Date(year, month, day).toDateString()) {
        dayDiv.classList.add('today');
    }

    return dayDiv;
}

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    calendar.style.backgroundImage = monthBackgrounds[month % monthBackgrounds.length];
    calendar.style.backgroundSize = 'cover';
    calendar.style.backgroundPosition = 'center';
    calendar.style.backgroundRepeat = 'no-repeat';

    monthYearElement.textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    calendarGrid.innerHTML = '';
    for (let i = 0; i < firstDay.getDay(); i++) {
        calendarGrid.appendChild(document.createElement('div'));
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayDiv = createDayElement(i, year, month);
        calendarGrid.appendChild(dayDiv);
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

todayBtn.addEventListener('click', () => {
    currentDate = new Date();
    renderCalendar(currentDate);
});

renderCalendar(currentDate);