/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FcsPageId } from './types/fcs';
import { FcsShell } from './components/fcs/FcsShell';
import { Page01Dashboard } from './components/fcs/Page01Dashboard';
import { Page02NovelGraph } from './components/fcs/Page02NovelGraph';
import { Page03AiAgent } from './components/fcs/Page03AiAgent';
import { Page04Editor } from './components/fcs/Page04Editor';
import { Page05Timeline } from './components/fcs/Page05Timeline';
import { Page06VersionControl } from './components/fcs/Page06VersionControl';
import { Page07Collaboration } from './components/fcs/Page07Collaboration';
import { Page08ReviewGate } from './components/fcs/Page08ReviewGate';
import { Page09PluginManager } from './components/fcs/Page09PluginManager';
import { Page10ProjectSettings } from './components/fcs/Page10ProjectSettings';
import { Page11AssetManager } from './components/fcs/Page11AssetManager';
import { Page12PublishShare } from './components/fcs/Page12PublishShare';

export default function App() {
  const [currentPage, setCurrentPage] = useState<FcsPageId>('01-dashboard');

  const handleNavigate = (page: FcsPageId) => {
    setCurrentPage(page);
  };

  return (
    <FcsShell currentPage={currentPage} onNavigate={handleNavigate}>
      {currentPage === '01-dashboard' && <Page01Dashboard onNavigate={handleNavigate} />}
      {currentPage === '02-novel-graph' && <Page02NovelGraph onNavigate={handleNavigate} />}
      {currentPage === '03-ai-agent' && <Page03AiAgent onNavigate={handleNavigate} />}
      {currentPage === '04-editor' && <Page04Editor onNavigate={handleNavigate} />}
      {currentPage === '05-timeline' && <Page05Timeline onNavigate={handleNavigate} />}
      {currentPage === '06-version-control' && <Page06VersionControl onNavigate={handleNavigate} />}
      {currentPage === '07-collaboration' && <Page07Collaboration onNavigate={handleNavigate} />}
      {currentPage === '08-review-gate' && <Page08ReviewGate onNavigate={handleNavigate} />}
      {currentPage === '09-plugin-manager' && <Page09PluginManager onNavigate={handleNavigate} />}
      {currentPage === '10-project-settings' && <Page10ProjectSettings onNavigate={handleNavigate} />}
      {currentPage === '11-asset-manager' && <Page11AssetManager onNavigate={handleNavigate} />}
      {currentPage === '12-publish-share' && <Page12PublishShare onNavigate={handleNavigate} />}
    </FcsShell>
  );
}
