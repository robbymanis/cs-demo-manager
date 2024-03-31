import { CURRENT_SCHEMA_VERSION } from './schema-version';
import type { Settings } from './settings';
import { Page } from 'csdm/node/settings/page';
import { RankingFilter } from 'csdm/common/types/ranking-filter';
import { AnalysisStatusFilter } from 'csdm/common/types/analysis-status-filter';
import { EncoderSoftware } from 'csdm/common/types/encoder-software';
import { VideoContainer } from 'csdm/common/types/video-container';

export const defaultSettings: Settings = {
  schemaVersion: CURRENT_SCHEMA_VERSION,
  autoDownloadUpdates: true,
  database: {
    hostname: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'csdm',
  },
  folders: [],
  demos: {
    showAllFolders: false,
    currentFolderPath: '',
    sources: [],
    tagIds: [],
    types: [],
    games: [],
    startDate: undefined,
    endDate: undefined,
    analysisStatus: AnalysisStatusFilter.All,
  },
  pinnedPlayerSteamId: '',
  steamApiKey: '',
  faceitApiKey: '',
  ui: {
    locale: 'en',
    theme: 'dark',
    initialPage: Page.Matches,
  },
  analyze: {
    analyzePositions: false,
  },
  playback: {
    width: 1024,
    height: 768,
    fullscreen: false,
    useCustomHighlights: true,
    useCustomLowlights: true,
    highlights: {
      beforeKillDelayInSeconds: 5,
      afterKillDelayInSeconds: 2,
    },
    lowlights: {
      beforeKillDelayInSeconds: 5,
      afterKillDelayInSeconds: 2,
    },
    round: {
      beforeRoundDelayInSeconds: 0,
      afterRoundDelayInSeconds: 2,
    },
    launchParameters: '',
  },
  video: {
    closeGameAfterRecording: true,
    concatenateSequences: false,
    deleteRawFilesAfterEncoding: true,
    showOnlyDeathNotices: true,
    deathNoticesDuration: 5,
    encoderSoftware: EncoderSoftware.FFmpeg,
    ffmpegSettings: {
      audioBitrate: 256,
      constantRateFactor: 23,
      customLocationEnabled: false,
      customExecutableLocation: '',
      videoContainer: VideoContainer.AVI,
      videoCodec: 'libx264',
      audioCodec: 'libmp3lame',
      inputParameters: '',
      outputParameters: '',
    },
    framerate: 30,
    generateOnlyRawFiles: false,
    height: 720,
    width: 1280,
    rawFilesFolderPath: '',
    outputFolderPath: '',
    hlae: {
      customLocationEnabled: false,
      customExecutableLocation: '',
      configFolderEnabled: false,
      configFolderPath: '',
    },
  },
  playerProfile: {
    gameModes: [],
    games: [],
    demoSources: [],
    demoTypes: [],
    ranking: RankingFilter.All,
    tagIds: [],
    maxRounds: [],
    startDate: undefined,
    endDate: undefined,
  },
  download: {
    folderPath: undefined,
    downloadValveDemosAtStartup: true,
    downloadValveDemosInBackground: true,
    downloadFaceitDemosAtStartup: true,
    downloadFaceitDemosInBackground: true,
  },
  matches: {
    gameModes: [],
    demoTypes: [],
    sources: [],
    games: [],
    ranking: RankingFilter.All,
    tagIds: [],
    maxRounds: [],
    startDate: undefined,
    endDate: undefined,
  },
  players: {
    bans: [],
    startDate: undefined,
    endDate: undefined,
  },
  ban: {
    ignoreBanBeforeFirstSeen: true,
  },
};
