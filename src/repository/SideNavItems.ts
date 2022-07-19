import type { SideNavItemsModel } from '~/interfaces/SideNavModel'

export class SideNavItems {
  static readonly navItems: SideNavItemsModel = {
    DASHBOARD: {
      title: 'Dashboard',
      contents: [],
      iconUrl: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--iconoir" width="22" height="22" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m12 7.01l.01-.011M16 9.01l.01-.011M8 9.01l.01-.011M18 13.01l.01-.011M6 13.01l.01-.011M17 17.01l.01-.011M7 17.01l.01-.011M12 17l1-6m-4.5 9.001H4A9.956 9.956 0 0 1 2 14C2 8.477 6.477 4 12 4s10 4.477 10 10c0 2.252-.744 4.33-2 6.001L15.5 20"></path><path d="M12 23a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></path></g></svg>',
    },
    CONTRACT: {
      title: 'Development',
      contents: [
        {
          title: 'XYZ',
          iconUrl: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--teenyicons" width="22" height="22" preserveAspectRatio="xMidYMid meet" viewBox="0 0 15 15"><path fill="currentColor" d="M4.5 7H4v1h.5V7Zm6 1h.5V7h-.5v1Zm-6-4H4v1h.5V4Zm2 1H7V4h-.5v1Zm4-4.5l.354-.354L10.707 0H10.5v.5Zm3 3h.5v-.207l-.146-.147l-.354.354ZM8 11l-.354.354L8 11Zm-.5.5l.224.447l.04-.02l.036-.027l-.3-.4ZM4.5 8h6V7h-6v1Zm0-3h2V4h-2v1Zm8 9h-10v1h10v-1ZM2 13.5v-12H1v12h1ZM2.5 1h8V0h-8v1ZM13 3.5v10h1v-10h-1ZM10.146.854l3 3l.708-.708l-3-3l-.708.708ZM2.5 14a.5.5 0 0 1-.5-.5H1A1.5 1.5 0 0 0 2.5 15v-1Zm10 1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5v1ZM2 1.5a.5.5 0 0 1 .5-.5V0A1.5 1.5 0 0 0 1 1.5h1Zm3.474 10.158c.111-.333.427-.642.83-.75c.377-.101.862-.035 1.342.446l.708-.708c-.72-.72-1.569-.903-2.309-.704c-.713.192-1.297.733-1.52 1.4l.95.316Zm2.172-.304a.933.933 0 0 1 .079.087l.79-.614a1.945 1.945 0 0 0-.161-.18l-.708.707Zm.079.087c.078.1.06.132.063.11c.002-.014.006.009-.054.063a1 1 0 0 1-.29.169a1.781 1.781 0 0 1-.394.108a.848.848 0 0 1-.25.01c-.017-.004.018 0 .07.037a.388.388 0 0 1 .131.43a.209.209 0 0 1-.023.047c-.002.002.015-.02.072-.067c.114-.092.324-.226.674-.4l-.448-.895c-.377.188-.66.36-.854.517a1.375 1.375 0 0 0-.26.267a.705.705 0 0 0-.14.438a.61.61 0 0 0 .255.468c.113.084.238.12.33.139c.187.037.4.027.593-.002c.38-.058.872-.222 1.207-.526c.174-.159.339-.387.374-.686c.036-.306-.074-.593-.267-.84l-.79.613Zm.075.459a2.56 2.56 0 0 1 .518-.307l-.397-.918c-.24.104-.48.245-.721.425l.6.8Zm.518-.307c.65-.281 1.231-.133 1.826.15c.15.072.296.15.444.23c.144.078.296.161.44.235c.276.139.618.292.972.292v-1c-.094 0-.248-.047-.52-.184c-.128-.066-.262-.14-.416-.223c-.15-.081-.316-.17-.49-.252c-.698-.333-1.611-.616-2.653-.166l.397.918Z"></path></svg>',
        },
      ],
      iconUrl: '',
    },
    SETTINGS: {
      title: 'Settings',
      contents: [
        {
          title: 'My Profile',
          iconUrl: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="22" height="22" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm10 28h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7zm0-26h10v2H22zm0 5h10v2H22zm0 5h7v2h-7z"></path></svg>',
        },
        {
          title: 'Contract',
          iconUrl: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--icon-park-outline" width="22" height="22" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M40 30V15L27.5 7.969m-7 0L8 15v15m3 4.688L24 42l8-4.5l5-2.813M21 18.75l-3 1.75v7l3 1.75L24 31l3-1.75l3-1.75v-7l-3-1.75L24 17l-3 1.75ZM24 17v-7m6 17l7 4m-19-4l-7 4"></path><circle cx="24" cy="7" r="3"></circle><circle cx="8" cy="33" r="3"></circle><circle cx="40" cy="33" r="3"></circle></g></svg>',
        },
      ],
      iconUrl: '',
    },
  }
}

