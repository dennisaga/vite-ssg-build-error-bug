interface SideNavContentModel {
  title: string
  iconUrl: string
}
interface SideNavModel extends SideNavContentModel {
  contents: SideNavContentModel[]
}
export interface SideNavItemsModel {
  DASHBOARD: SideNavModel
  CONTRACT: SideNavModel
  SETTINGS: SideNavModel
}
