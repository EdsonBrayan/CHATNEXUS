
import React from 'react';
import ProfileHeader from '../profile/ProfileHeader';
import MissionsWidget from '../profile/MissionsWidget';
import AchievementsWidget from '../profile/AchievementsWidget';
import BehavioralReport from '../profile/BehavioralReport';
import { Mission, Achievement, UserLevel } from '../../types';

interface ProfileProps {
    userLevel: UserLevel;
    userName: string;
    missions: Mission[];
    achievements: Achievement[];
}

const Profile: React.FC<ProfileProps> = ({ userLevel, userName, missions, achievements }) => {
    const currentXp = 250;
    const nextLevelXp = 500;

    return (
        <div className="p-5 space-y-6">
            <ProfileHeader name={userName} level={userLevel} currentXp={currentXp} nextLevelXp={nextLevelXp} />
            <MissionsWidget missions={missions} />
            <AchievementsWidget achievements={achievements} />
            <BehavioralReport />
        </div>
    );
};

export default Profile;
