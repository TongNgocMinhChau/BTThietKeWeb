const weatherCities = [
  { id: 'ha-noi', name: 'Hà Nội', region: 'Hà Nội', latitude: 21.0285, longitude: 105.8542, weather: null },
  { id: 'ho-chi-minh', name: 'TP. Hồ Chí Minh', region: 'TP. Hồ Chí Minh', latitude: 10.8231, longitude: 106.6297, weather: null },
  { id: 'hai-phong', name: 'Hải Phòng', region: 'Hải Phòng', latitude: 20.8449, longitude: 106.6881, weather: null },
  { id: 'da-nang', name: 'Đà Nẵng', region: 'Đà Nẵng', latitude: 16.0544, longitude: 108.2022, weather: null },
  { id: 'can-tho', name: 'Cần Thơ', region: 'Cần Thơ', latitude: 10.0452, longitude: 105.7469, weather: null },
  { id: 'hue', name: 'Huế', region: 'Thừa Thiên Huế', latitude: 16.4637, longitude: 107.5909, weather: null },
  { id: 'da-lat', name: 'Đà Lạt', region: 'Lâm Đồng', latitude: 11.9404, longitude: 108.4583, weather: null },
  { id: 'nha-trang', name: 'Nha Trang', region: 'Khánh Hòa', latitude: 12.2388, longitude: 109.1967, weather: null },
  { id: 'vung-tau', name: 'Vũng Tàu', region: 'Bà Rịa - Vũng Tàu', latitude: 10.3459, longitude: 107.0843, weather: null },
  { id: 'quy-nhon', name: 'Quy Nhơn', region: 'Bình Định', latitude: 13.782, longitude: 109.2196, weather: null },
  { id: 'buon-ma-thuot', name: 'Buôn Ma Thuột', region: 'Đắk Lắk', latitude: 12.6667, longitude: 108.0378, weather: null },
  { id: 'pleiku', name: 'Pleiku', region: 'Gia Lai', latitude: 13.9716, longitude: 108.015, weather: null },
  { id: 'kon-tum', name: 'Kon Tum', region: 'Kon Tum', latitude: 14.3545, longitude: 108.0076, weather: null },
  { id: 'phan-thiet', name: 'Phan Thiết', region: 'Bình Thuận', latitude: 10.9289, longitude: 108.1021, weather: null },
  { id: 'bao-loc', name: 'Bảo Lộc', region: 'Lâm Đồng', latitude: 11.5475, longitude: 107.8077, weather: null },
  { id: 'long-xuyen', name: 'Long Xuyên', region: 'An Giang', latitude: 10.3864, longitude: 105.4352, weather: null },
  { id: 'rach-gia', name: 'Rạch Giá', region: 'Kiên Giang', latitude: 10.0125, longitude: 105.0809, weather: null },
  { id: 'soc-trang', name: 'Sóc Trăng', region: 'Sóc Trăng', latitude: 9.6025, longitude: 105.9739, weather: null },
  { id: 'ca-mau', name: 'Cà Mau', region: 'Cà Mau', latitude: 9.1769, longitude: 105.1524, weather: null },
  { id: 'my-tho', name: 'Mỹ Tho', region: 'Tiền Giang', latitude: 10.3600, longitude: 106.3599, weather: null },
  { id: 'ben-tre', name: 'Bến Tre', region: 'Bến Tre', latitude: 10.2433, longitude: 106.3756, weather: null },
  { id: 'tra-vinh', name: 'Trà Vinh', region: 'Trà Vinh', latitude: 9.9347, longitude: 106.3453, weather: null },
  { id: 'vinh-long', name: 'Vĩnh Long', region: 'Vĩnh Long', latitude: 10.2537, longitude: 105.9722, weather: null },
  { id: 'cao-lanh', name: 'Cao Lãnh', region: 'Đồng Tháp', latitude: 10.4602, longitude: 105.6328, weather: null },
  { id: 'chau-doc', name: 'Châu Đốc', region: 'An Giang', latitude: 10.7008, longitude: 105.1167, weather: null },
  { id: 'ha-giang', name: 'Hà Giang', region: 'Hà Giang', latitude: 22.8233, longitude: 104.9836, weather: null },
  { id: 'lao-cai', name: 'Lào Cai', region: 'Lào Cai', latitude: 22.4809, longitude: 103.9755, weather: null },
  { id: 'yen-bai', name: 'Yên Bái', region: 'Yên Bái', latitude: 21.7168, longitude: 104.8986, weather: null },
  { id: 'son-la', name: 'Sơn La', region: 'Sơn La', latitude: 21.327, longitude: 103.914, weather: null },
  { id: 'dien-bien-phu', name: 'Điện Biên Phủ', region: 'Điện Biên', latitude: 21.386, longitude: 103.023, weather: null },
  { id: 'thanh-hoa', name: 'Thanh Hóa', region: 'Thanh Hóa', latitude: 19.8067, longitude: 105.7852, weather: null },
  { id: 'vinh', name: 'Vinh', region: 'Nghệ An', latitude: 18.6796, longitude: 105.6813, weather: null },
  { id: 'dong-hoi', name: 'Đồng Hới', region: 'Quảng Bình', latitude: 17.4689, longitude: 106.6223, weather: null },
  { id: 'dong-ha', name: 'Đông Hà', region: 'Quảng Trị', latitude: 16.8163, longitude: 107.1003, weather: null },
  { id: 'dong-nai', name: 'Đồng Nai', region: 'Đồng Nai', latitude: 10.9574, longitude: 106.8426, weather: null },
  { id: 'tam-ky', name: 'Tam Kỳ', region: 'Quảng Nam', latitude: 15.5736, longitude: 108.474, weather: null },
  { id: 'quang-ngai', name: 'Quảng Ngãi', region: 'Quảng Ngãi', latitude: 15.1205, longitude: 108.7923, weather: null }
];

const storageKey = 'weather-planner-state-v1';
const weatherSelect = document.querySelector('#city-select');
const weatherTitle = document.querySelector('#weather-title');
const weatherDate = document.querySelector('#weather-date');
const locationName = document.querySelector('#location-name');
const weatherStatus = document.querySelector('#weather-status');
const temperatureValue = document.querySelector('#temperature-value');
const weatherCondition = document.querySelector('#weather-condition');
const feelsLikeValue = document.querySelector('#feels-like-value');
const humidityValue = document.querySelector('#humidity-value');
const windValue = document.querySelector('#wind-value');
const rainValue = document.querySelector('#rain-value');
const sunsetValue = document.querySelector('#sunset-value');
const weatherIcon = document.querySelector('#weather-icon');
const weatherAdvice = document.querySelector('#weather-advice');

const destinations = [
  {
    title: 'Hồ Tuyền Lâm',
    category: 'nature',
    categoryLabel: 'Thiên nhiên',
    time: '08:30',
    detail: 'Hồ nước & rừng thông',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Mặt hồ xanh giữa núi rừng'
  },
  {
    title: 'Đồi chè Cầu Đất',
    category: 'nature',
    categoryLabel: 'Thiên nhiên',
    time: '09:15',
    detail: 'Đồi chè & săn mây',
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Đồi xanh đón nắng sớm'
  },
  {
    title: 'Ga Đà Lạt',
    category: 'culture',
    categoryLabel: 'Văn hóa',
    time: '10:30',
    detail: 'Nhà ga cổ & kiến trúc',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Đường ray tàu giữa phong cảnh xanh'
  },
  {
    title: 'Vườn hoa thành phố',
    category: 'nature',
    categoryLabel: 'Thiên nhiên',
    time: '11:30',
    detail: 'Vườn hoa & lối dạo bộ',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Những khóm hoa nhiều màu sắc'
  },
  {
    title: 'Chợ Đà Lạt',
    category: 'food',
    categoryLabel: 'Ẩm thực',
    time: '12:30',
    detail: 'Ăn trưa & đặc sản địa phương',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Quầy nông sản tươi tại chợ'
  },
  {
    title: 'Thác Datanla',
    category: 'nature',
    categoryLabel: 'Thiên nhiên',
    time: '14:00',
    detail: 'Thác nước & đường mòn',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Dòng thác đổ qua vách đá phủ cây xanh'
  },
  {
    title: 'Thiền viện Trúc Lâm',
    category: 'culture',
    categoryLabel: 'Văn hóa',
    time: '15:00',
    detail: 'Thiền viện & vườn cảnh',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Kiến trúc thanh bình giữa thiên nhiên'
  },
  {
    title: 'Đỉnh Langbiang',
    category: 'nature',
    categoryLabel: 'Thiên nhiên',
    time: '15:45',
    detail: 'Toàn cảnh cao nguyên',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Đỉnh núi cao nhìn ra thung lũng'
  },
  {
    title: 'Quảng trường Lâm Viên',
    category: 'culture',
    categoryLabel: 'Văn hóa',
    time: '16:30',
    detail: 'Kiến trúc & hồ Xuân Hương',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Không gian kiến trúc rộng mở'
  },
  {
    title: 'Hồ Xuân Hương',
    category: 'nature',
    categoryLabel: 'Thiên nhiên',
    time: '17:00',
    detail: 'Dạo hồ lúc hoàng hôn',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Mặt hồ yên ả giữa núi rừng'
  },
  {
    title: 'Tiệm cà phê trên đồi',
    category: 'food',
    categoryLabel: 'Ẩm thực',
    time: '17:30',
    detail: 'Cà phê ngắm hoàng hôn',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Không gian quán cà phê ấm cúng'
  },
  {
    title: 'Nhà thờ Con Gà',
    category: 'culture',
    categoryLabel: 'Văn hóa',
    time: '18:30',
    detail: 'Nhà thờ cổ & phố trung tâm',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=320&h=220&q=80',
    alt: 'Mặt tiền một công trình kiến trúc cổ'
  }
];

const destinationList = document.querySelector('#destination-list');
const searchInput = document.querySelector('#destination-search');
const categoryFilter = document.querySelector('#category-filter');
const titleSort = document.querySelector('#title-sort');
const pageSizeSelect = document.querySelector('#page-size');
const previousPageButton = document.querySelector('#previous-page');
const nextPageButton = document.querySelector('#next-page');
const pageNumbers = document.querySelector('#page-numbers');
const resultRange = document.querySelector('#result-range');
const destinationCount = document.querySelector('#destination-count');
const visitedDestinations = [];
const plannedTab = document.querySelector('#planned-tab');
const visitedTab = document.querySelector('#visited-tab');
const plannedCount = document.querySelector('#planned-count');
const visitedCount = document.querySelector('#visited-count');
const addDestinationForm = document.querySelector('#add-destination-form');
const newDestinationName = document.querySelector('#new-destination-name');
const newDestinationTime = document.querySelector('#new-destination-time');
const addDestinationFeedback = document.querySelector('#add-destination-feedback');

let currentPage = 1;
let activeList = 'planned';
let nextCustomDestinationId = 1;
let pendingEntryId = null;

function populateCitySelect() {
  const selectedCityId = weatherSelect.value || 'da-lat';
  const options = [...weatherCities]
    .sort((first, second) => first.name.localeCompare(second.name, 'vi'))
    .map((city) => {
      const option = document.createElement('option');
      option.value = city.id;
      option.textContent = city.name === city.region ? city.name : `${city.name} · ${city.region}`;
      return option;
    });

  weatherSelect.replaceChildren(...options);
  weatherSelect.value = weatherCities.some((city) => city.id === selectedCityId) ? selectedCityId : 'da-lat';
}

function isValidDestination(destination) {
  return destination
    && typeof destination.title === 'string'
    && destination.title.trim().length > 0
    && typeof destination.category === 'string'
    && typeof destination.categoryLabel === 'string'
    && typeof destination.time === 'string'
    && /^\d{2}:\d{2}$/.test(destination.time)
    && typeof destination.detail === 'string'
    && typeof destination.image === 'string'
    && typeof destination.alt === 'string';
}

function saveStorage() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      version: 1,
      selectedCityId: weatherSelect.value,
      destinations,
      visitedDestinations
    }));
  } catch (error) {
    console.warn('Không thể lưu lịch trình vào LocalStorage:', error);
  }
}

function loadStorage() {
  try {
    const savedState = JSON.parse(localStorage.getItem(storageKey) ?? 'null');
    if (!savedState || savedState.version !== 1) return;

    if (weatherCities.some((city) => city.id === savedState.selectedCityId)) {
      weatherSelect.value = savedState.selectedCityId;
    }

    if (Array.isArray(savedState.destinations) && savedState.destinations.every(isValidDestination)) {
      const restoredDestinations = savedState.destinations.map((destination) => ({
        ...destination,
        visited: destination.visited === true
      }));
      destinations.splice(0, destinations.length, ...restoredDestinations.filter((destination) => !destination.visited));
      visitedDestinations.splice(0, visitedDestinations.length, ...restoredDestinations.filter((destination) => destination.visited));
    }

    if (Array.isArray(savedState.visitedDestinations) && savedState.visitedDestinations.every(isValidDestination)) {
      visitedDestinations.push(...savedState.visitedDestinations.map((destination) => ({
        ...destination,
        visited: true
      })));
    }

    const customIds = [...destinations, ...visitedDestinations]
      .map((destination) => /^custom-(\d+)$/.exec(destination.id ?? ''))
      .filter(Boolean)
      .map((match) => Number(match[1]));
    nextCustomDestinationId = Math.max(0, ...customIds) + 1;
  } catch (error) {
    console.warn('Không thể đọc lịch trình từ LocalStorage:', error);
  }
}

function getWeatherDescription(code) {
  const descriptions = {
    0: 'Trời quang',
    1: 'Ít mây',
    2: 'Có mây rải rác',
    3: 'Nhiều mây',
    45: 'Sương mù',
    48: 'Sương muối',
    51: 'Mưa phùn nhẹ',
    53: 'Mưa phùn',
    55: 'Mưa phùn dày',
    56: 'Mưa phùn lạnh nhẹ',
    57: 'Mưa phùn lạnh dày',
    61: 'Mưa nhẹ',
    63: 'Mưa vừa',
    65: 'Mưa lớn',
    66: 'Mưa lạnh nhẹ',
    67: 'Mưa lạnh lớn',
    71: 'Tuyết nhẹ',
    73: 'Tuyết vừa',
    75: 'Tuyết dày',
    77: 'Mưa tuyết',
    80: 'Mưa rào nhẹ',
    81: 'Mưa rào vừa',
    82: 'Mưa rào lớn',
    85: 'Mưa tuyết nhẹ',
    86: 'Mưa tuyết lớn',
    95: 'Dông',
    96: 'Dông có mưa đá',
    99: 'Dông mạnh, mưa đá'
  };

  return descriptions[code] ?? 'Chưa xác định';
}

function getWeatherGroup(code) {
  if (code === 0 || code === 1) return 'clear';
  if (code === 2) return 'partly-cloudy';
  if (code === 3) return 'cloudy';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 71 && code <= 86) return 'snow';
  if (code >= 95) return 'storm';
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'rain';
  return 'cloudy';
}

function updateWeatherCard(city) {
  const { current, daily } = city.weather;
  const weatherText = getWeatherDescription(current.weather_code);
  const weatherGroup = getWeatherGroup(current.weather_code);
  const sunsetTime = daily.sunset?.[0]?.split('T')[1]?.slice(0, 5) ?? '--:--';
  const [year, month, day] = current.time.slice(0, 10).split('-').map(Number);
  const localDate = new Date(Date.UTC(year, month - 1, day, 12));

  weatherTitle.textContent = city.name;
  weatherDate.textContent = new Intl.DateTimeFormat('vi-VN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC'
  }).format(localDate).toLocaleUpperCase('vi-VN');
  locationName.textContent = `${city.region}, Việt Nam`;
  temperatureValue.textContent = Math.round(current.temperature_2m);
  weatherCondition.textContent = weatherText;
  feelsLikeValue.textContent = Math.round(current.apparent_temperature);
  humidityValue.textContent = current.relative_humidity_2m ?? '--';
  windValue.textContent = Math.round(current.wind_speed_10m);
  rainValue.textContent = current.precipitation_probability ?? '--';
  sunsetValue.textContent = sunsetTime;
  weatherIcon.dataset.weather = weatherGroup;
  weatherIcon.setAttribute('aria-label', weatherText);
  weatherStatus.textContent = 'HIỆN TẠI';
  weatherAdvice.textContent = current.precipitation_probability >= 50 || weatherGroup === 'rain' || weatherGroup === 'storm'
    ? 'Khả năng mưa cao. Hãy chuẩn bị áo mưa hoặc ô cho lịch trình.'
    : 'Thời tiết khá thuận lợi để khám phá. Nhớ mang theo áo khoác mỏng nhé.';
}

async function fetchWeatherForCities(cities, timeoutMs) {
  const query = new URLSearchParams({
    latitude: cities.map((city) => city.latitude).join(','),
    longitude: cities.map((city) => city.longitude).join(','),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code,precipitation_probability',
    daily: 'sunset',
    timezone: 'auto',
    forecast_days: '1'
  });

  let response;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    response = await fetch(`https://api.open-meteo.com/v1/forecast?${query}`, {
      signal: AbortSignal.timeout(timeoutMs)
    });

    if (response.status !== 503 || attempt === 2) {
      break;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
  }

  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }

  const payload = await response.json();
  const results = Array.isArray(payload) ? payload : [payload];
  if (!Array.isArray(results) || results.length !== cities.length) {
    throw new Error('Unexpected weather response');
  }

  cities.forEach((city, index) => {
    city.weather = results[index];
  });
  }

async function showWeatherForCity(city) {
  weatherTitle.textContent = city.name;
  locationName.textContent = `${city.region}, Việt Nam`;
  weatherStatus.textContent = 'ĐANG TẢI';
  weatherCondition.textContent = 'Đang tải...';
  weatherAdvice.textContent = 'Đang lấy dữ liệu thời tiết hiện tại...';
  try {
    await fetchWeatherForCities([city], 15000);
    updateWeatherCard(city);
  } catch (error) {
    weatherStatus.textContent = 'LỖI DỮ LIỆU';
    weatherCondition.textContent = 'Không thể tải thời tiết';
    weatherAdvice.textContent = 'Kiểm tra kết nối internet rồi tải lại trang để lấy dữ liệu mới.';
    weatherIcon.removeAttribute('data-weather');
    weatherIcon.setAttribute('aria-label', 'Không thể tải tình trạng thời tiết');
    console.error('Không thể tải dữ liệu Open-Meteo:', error);
  }
}

async function loadWeatherForCities() {
  const defaultCity = weatherCities.find((city) => city.id === weatherSelect.value);
  await showWeatherForCity(defaultCity);

  fetchWeatherForCities(weatherCities, 60000).catch((error) => {
    console.warn('Không thể đồng bộ dữ liệu cho 36 thành phố:', error);
  });
}

weatherSelect.addEventListener('change', () => {
  saveStorage();
  const selectedCity = weatherCities.find((city) => city.id === weatherSelect.value);
  if (selectedCity?.weather) {
    updateWeatherCard(selectedCity);
  } else if (selectedCity) {
    showWeatherForCity(selectedCity);
  }
});

function getVisibleDestinations() {
  const searchTerm = searchInput.value.trim().toLocaleLowerCase('vi');
  const selectedCategory = categoryFilter.value;
  const activeDestinations = activeList === 'visited' ? visitedDestinations : destinations;

  return activeDestinations
    .filter((destination) => {
      const matchesSearch = `${destination.title} ${destination.detail}`
        .toLocaleLowerCase('vi')
        .includes(searchTerm);
      const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((first, second) => {
      const comparison = first.title.localeCompare(second.title, 'vi');
      return titleSort.value === 'asc' ? comparison : -comparison;
    });
}

function createDestinationCard(destination, index, listType) {
  const item = document.createElement('li');
  item.className = 'destination-card';
  item.style.animationDelay = `${Math.min(index * 35, 210)}ms`;
  item.classList.toggle('is-visited', listType === 'visited');

  if (destination.id) {
    item.dataset.destinationId = destination.id;
  }

  if (destination.id === pendingEntryId) {
    item.classList.add('is-entering');
  }

  const image = document.createElement('img');
  image.className = 'destination-image';
  image.src = destination.image;
  image.alt = destination.alt;
  image.loading = 'lazy';

  const copy = document.createElement('div');
  copy.className = 'destination-copy';

  const title = document.createElement('h3');
  title.textContent = destination.title;

  const meta = document.createElement('div');
  meta.className = 'destination-meta';

  const category = document.createElement('span');
  category.className = 'category-tag';
  category.dataset.category = destination.category;
  category.textContent = destination.categoryLabel;

  const detail = document.createElement('span');
  detail.textContent = destination.detail;

  const time = document.createElement('span');
  time.className = 'destination-time';
  time.textContent = formatDestinationTime(destination.time);

  const actions = document.createElement('div');
  actions.className = 'destination-actions';

  const visitedButton = document.createElement('button');
  visitedButton.className = 'destination-action destination-visited';
  visitedButton.type = 'button';
  visitedButton.textContent = listType === 'visited' ? 'Về lịch trình' : 'Đã đến';
  visitedButton.setAttribute('aria-label', listType === 'visited'
    ? `Đưa ${destination.title} về lịch trình`
    : `Đánh dấu ${destination.title} đã đến`);
  visitedButton.addEventListener('click', () => {
    const source = listType === 'visited' ? visitedDestinations : destinations;
    const target = listType === 'visited' ? destinations : visitedDestinations;
    const destinationIndex = source.indexOf(destination);
    if (destinationIndex === -1) return;

    source.splice(destinationIndex, 1);
    destination.visited = listType !== 'visited';
    target.push(destination);
    saveStorage();
    renderUI();
    (destinationList.querySelector('.destination-visited') ?? newDestinationName).focus();
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'destination-action destination-delete';
  deleteButton.type = 'button';
  deleteButton.textContent = 'Xóa';
  deleteButton.addEventListener('click', () => {
    const source = listType === 'visited' ? visitedDestinations : destinations;
    const destinationIndex = source.indexOf(destination);
    if (destinationIndex === -1) return;

    source.splice(destinationIndex, 1);
    saveStorage();
    renderUI();
    const nextAction = destinationList.querySelector('.destination-visited');
    (nextAction ?? newDestinationName).focus();
  });

  actions.append(visitedButton, deleteButton);

  meta.append(category, detail);
  copy.append(title, meta);
  item.append(image, copy, time, actions);
  return item;
}

function formatDestinationTime(value) {
  const match = /^(\d{2}):(\d{2})$/.exec(value);
  if (!match) return value;

  const hour = Number(match[1]);
  const displayHour = hour % 12 || 12;
  const period = hour >= 12 ? 'PM' : 'AM';
  return `${displayHour}:${match[2]} ${period}`;
}

function renderPagination(pageCount) {
  pageNumbers.replaceChildren();

  for (let page = 1; page <= pageCount; page += 1) {
    const button = document.createElement('button');
    button.className = 'page-number';
    button.type = 'button';
    button.textContent = String(page);
    button.setAttribute('aria-label', `Trang ${page}`);

    if (page === currentPage) {
      button.setAttribute('aria-current', 'page');
    }

    button.addEventListener('click', () => {
      currentPage = page;
      renderUI();
    });
    pageNumbers.append(button);
  }

  previousPageButton.disabled = currentPage <= 1;
  nextPageButton.disabled = currentPage >= pageCount;
}

function renderUI() {
  const filteredDestinations = getVisibleDestinations();
  const pageSize = pageSizeSelect.value === 'all'
    ? Math.max(filteredDestinations.length, 1)
    : Number(pageSizeSelect.value);
  const pageCount = Math.max(1, Math.ceil(filteredDestinations.length / pageSize));

  currentPage = Math.min(currentPage, pageCount);
  const startIndex = (currentPage - 1) * pageSize;
  const pageItems = filteredDestinations.slice(startIndex, startIndex + pageSize);
  destinationList.replaceChildren();

  if (pageItems.length === 0) {
    const emptyState = document.createElement('li');
    emptyState.className = 'empty-state';
    const hasFilters = searchInput.value.trim() || categoryFilter.value !== 'all';
    emptyState.textContent = hasFilters
      ? 'Chưa tìm thấy địa điểm phù hợp. Thử từ khóa khác nhé.'
      : activeList === 'visited'
        ? 'Chưa có địa điểm nào đã đến.'
        : 'Chưa có địa điểm trong lịch trình.';
    destinationList.append(emptyState);
  } else {
    pageItems.forEach((destination, index) => {
      destinationList.append(createDestinationCard(destination, index, activeList));
    });
  }

  if (pendingEntryId) {
    const enteringCard = destinationList.querySelector('.destination-card.is-entering');
    if (enteringCard) {
      enteringCard.scrollIntoView({ behavior: 'instant', block: 'nearest' });
    }
    pendingEntryId = null;
  }

  const rangeStart = filteredDestinations.length === 0 ? 0 : startIndex + 1;
  const rangeEnd = Math.min(startIndex + pageSize, filteredDestinations.length);
  resultRange.textContent = `${rangeStart}–${rangeEnd} / ${filteredDestinations.length} địa điểm`;
  destinationCount.textContent = `${destinations.length + visitedDestinations.length} điểm tổng cộng`;
  plannedCount.textContent = destinations.length;
  visitedCount.textContent = visitedDestinations.length;
  plannedTab.setAttribute('aria-selected', String(activeList === 'planned'));
  plannedTab.tabIndex = activeList === 'planned' ? 0 : -1;
  visitedTab.setAttribute('aria-selected', String(activeList === 'visited'));
  visitedTab.tabIndex = activeList === 'visited' ? 0 : -1;
  destinationList.setAttribute('aria-label', activeList === 'visited' ? 'Các địa điểm đã đến' : 'Lịch trình');
  renderPagination(pageCount);
}

function setActiveList(listType) {
  activeList = listType;
  currentPage = 1;
  searchInput.value = '';
  categoryFilter.value = 'all';
  renderUI();
}

function resetToFirstPage() {
  currentPage = 1;
  renderUI();
}

addDestinationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = newDestinationName.value.trim();
  if (!title || !newDestinationTime.value) return;

  const destination = {
    id: `custom-${nextCustomDestinationId++}`,
    title,
    category: 'custom',
    categoryLabel: 'Lịch trình',
    time: newDestinationTime.value,
    detail: 'Địa điểm đã thêm',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=320&h=220&q=80',
    alt: `Phong cảnh thiên nhiên cho ${title}`,
    visited: false
  };

  destinations.push(destination);
  activeList = 'planned';
  saveStorage();
  searchInput.value = '';
  categoryFilter.value = 'all';

  const orderedDestinations = getVisibleDestinations();
  const destinationIndex = orderedDestinations.indexOf(destination);
  const pageSize = pageSizeSelect.value === 'all'
    ? Math.max(orderedDestinations.length, 1)
    : Number(pageSizeSelect.value);
  currentPage = Math.floor(destinationIndex / pageSize) + 1;
  pendingEntryId = destination.id;
  renderUI();

  addDestinationFeedback.textContent = `Đã thêm ${title} vào lịch trình.`;
  addDestinationForm.reset();
  newDestinationTime.value = '09:00';
  destinationList.querySelector(`[data-destination-id="${destination.id}"] .destination-visited`)
    ?.focus({ preventScroll: true });
});

plannedTab.addEventListener('click', () => setActiveList('planned'));
visitedTab.addEventListener('click', () => setActiveList('visited'));
searchInput.addEventListener('input', resetToFirstPage);
categoryFilter.addEventListener('change', resetToFirstPage);
titleSort.addEventListener('change', resetToFirstPage);
pageSizeSelect.addEventListener('change', resetToFirstPage);
previousPageButton.addEventListener('click', () => {
  currentPage -= 1;
  renderUI();
});
nextPageButton.addEventListener('click', () => {
  currentPage += 1;
  renderUI();
});

populateCitySelect();
loadStorage();
renderUI();
loadWeatherForCities();