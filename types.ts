export enum GameView {
  INTRO = 'INTRO',
  LEVEL_SELECT = 'LEVEL_SELECT',
  LEVEL_1 = 'LEVEL_1',
  LEVEL_2 = 'LEVEL_2',
  LEVEL_3 = 'LEVEL_3',
}

export interface LevelConfig {
  id: GameView;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  vulnerability: string;
  locked: boolean;
  completed: boolean;
}

export interface GameState {
  currentView: GameView;
  completedLevels: string[]; // Array of Level IDs
}

export const LEVELS: LevelConfig[] = [
  {
    id: GameView.LEVEL_1,
    title: "Login Bypass",
    description: "Bypass the authentication using SQL Injection.",
    difficulty: "Easy",
    vulnerability: "SQL Injection",
    locked: false,
    completed: false
  },
  {
    id: GameView.LEVEL_2,
    title: "Malicious Comments",
    description: "Inject a script into the guestbook.",
    difficulty: "Medium",
    vulnerability: "Reflected XSS",
    locked: false, // Unlocked for demo purposes, usually dependent on prev level
    completed: false
  },
  {
    id: GameView.LEVEL_3,
    title: "Secret Documents",
    description: "Access files you aren't supposed to see.",
    difficulty: "Medium",
    vulnerability: "IDOR",
    locked: false,
    completed: false
  }
];