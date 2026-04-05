/**
 * Convert Unix timestamp to a Date object in the specified timezone
 * @param {number} unixTimestamp - Unix timestamp in seconds
 * @param {number} timezoneOffset - Timezone offset in seconds (from API: weatherData.timezone_offset)
 * @returns {Date} Date object adjusted for the timezone
 */
export function getDateInTimezone(unixTimestamp, timezoneOffset) {
  const utcDate = new Date(unixTimestamp * 1000);
  const offsetMs = timezoneOffset * 1000;
  const utcMs = utcDate.getTime();
  const adjustedDate = new Date(utcMs + offsetMs);
  
  return adjustedDate;
}

/**
 * Format time in the location's timezone
 * @param {number} unixTimestamp - Unix timestamp in seconds
 * @param {number} timezoneOffset - Timezone offset in seconds
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted time string
 */
export function formatTimeInTimezone(unixTimestamp, timezoneOffset, options = {}) {
  const utcDate = new Date(unixTimestamp * 1000);
  const offsetMs = timezoneOffset * 1000;
  const tzDate = new Date(utcDate.getTime() + offsetMs);
  
  const defaultOptions = { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  const formatter = new Intl.DateTimeFormat('en-US', { 
    ...mergedOptions, 
    timeZone: 'UTC' 
  });
  
  return formatter.format(tzDate);
}

/**
 * Format date in the location's timezone
 * @param {number} unixTimestamp - Unix timestamp in seconds
 * @param {number} timezoneOffset - Timezone offset in seconds
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDateInTimezone(unixTimestamp, timezoneOffset, options = {}) {
  const adjustedDate = getDateInTimezone(unixTimestamp, timezoneOffset);

  const defaultOptions = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  };
  
  const mergedOptions = { ...defaultOptions, ...options };
  
  const formatter = new Intl.DateTimeFormat('en-US', { 
    ...mergedOptions, 
    timeZone: 'UTC' 
  });
  
  return formatter.format(adjustedDate);
}
