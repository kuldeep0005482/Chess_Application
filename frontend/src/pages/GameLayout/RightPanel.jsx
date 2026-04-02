import React from 'react';
import MenuCard from '../../components/MenuCard/MenuCard';
import {
  Globe,
  Bot,
  GraduationCap,
  UserPlus,
  Trophy,
  Puzzle
} from 'lucide-react';

function RightPanel() {
  return (
    <div className="w-full lg:w-[360px] xl:w-[400px] min-h-0 bg-[#0d1b2a] p-4 rounded-xl overflow-y-auto">
      
      <div className="space-y-4">
        
        {/* Play Online */}
        <MenuCard
          icon={<Globe />}
          title="Play Online"
          subtitle="Real players worldwide"
          fullWidth
        />

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          <MenuCard
            icon={<Bot />}
            title="Play Bots"
            subtitle="Practice vs AI"
          />

          <MenuCard
            icon={<GraduationCap />}
            title="Play Coach"
            subtitle="Guided learning"
          />

          <MenuCard
            icon={<UserPlus />}
            title="Play a Friend"
            subtitle="Invite via link"
          />

          <MenuCard
            icon={<Trophy />}
            title="Tournaments"
            subtitle="Compete & rank"
          />
        </div>

        {/* Variants */}
        <MenuCard
          icon={<Puzzle />}
          title="Chess Variants"
          subtitle="960, Fog of War, & more"
          fullWidth
        />
      </div>

    </div>
  );
}

export default RightPanel;