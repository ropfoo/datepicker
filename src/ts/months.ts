export type month = {
    id: number,
    nameEN: string,
    nameDE: string,
    short: string,
    number: number,
    days: number
}

export const months: month[] = [
    {
        id: 0,
        nameEN: 'January',
        nameDE: 'Januar',
        short: 'Jan',
        number: 1,
        days: 31
    },
    {
        id: 1,
        nameEN: 'February',
        nameDE: 'Februar',
        short: 'Feb',
        number: 2,
        days: 30
    },
    {
        id: 2,
        nameEN: 'March',
        nameDE: 'März',
        short: 'Mar',
        number: 3,
        days: 31
    },
    {
        id: 3,
        nameEN: 'April',
        nameDE: 'April',
        short: 'Apr',
        number: 4,
        days: 30
    },
    {
        id: 4,
        nameEN: 'May',
        nameDE: 'Mai',
        short: 'Mai',
        number: 5,
        days: 31
    },
    {
        id: 5,
        nameEN: 'June',
        nameDE: 'Juni',
        short: 'Jun',
        number: 6,
        days: 30
    },
    {
        id: 6,
        nameEN: 'July',
        nameDE: 'Juli',
        short: 'Jul',
        number: 7,
        days: 31
    },
    {
        id: 7,
        nameEN: 'August',
        nameDE: 'August',
        short: 'Aug',
        number: 8,
        days: 31
    },
    {
        id: 8,
        nameEN: 'September',
        nameDE: 'September',
        short: 'Sep',
        number: 9,
        days: 30
    },
    {
        id: 9,
        nameEN: 'October',
        nameDE: 'Oktober',
        short: 'Okt',
        number: 10,
        days: 31
    },
    {
        id: 10,
        nameEN: 'November',
        nameDE: 'November',
        short: 'Nov',
        number: 11,
        days: 30
    },
    {
        id: 11,
        nameEN: 'Dezember',
        nameDE: 'December',
        short: 'Dec',
        number: 12,
        days: 31
    }
]