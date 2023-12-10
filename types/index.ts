export interface DataMenuProps{
  title: string, 
  id: string,
  content: React.ReactNode
}

export interface LinksProps {
  title: string,
  path: string,
}

export interface NavlinksProps {
  href: string,
  title: string
}

export interface ProjectCardProp{
  title: string,
  imgUrl: string,
  description: string,
  gitUrl: string,
  previewUrl: string,
  techStack: string[],
  challengesFaced: string[],
  lessonsLearned: string[],
  contributionType: "Solo" | "Team",
  duration: string,
}

export interface ProjectProps{
  id: number,
  title: string,
  description: string,
  imgUrl: string,
  tag: string[],
  gitUrl: string,
  previewUrl: string,
  techStack: string[], // List of technologies used in the project
  challengesFaced: string[], // Challenges you faced during the project
  lessonsLearned: string[], // Key lessons learned from the project
  contributionType: "Solo" | "Team"; // Whether you worked on the project solo or in a team
  duration: string; // Time taken to complete the project
}

export interface IconProps {
  url: string;
  icon: string; 
}

export interface Tab {
    active: boolean,
    selectTab: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode
}

export interface AchievementProps {
  metric: string,
  value: string,
  postfix: string,
  prefix?: string
}