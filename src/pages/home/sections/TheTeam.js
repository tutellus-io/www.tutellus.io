//@flow
import React from 'react';
import {translate} from 'react-i18next';
import {
    PageSection,
    Text,
    ResponsiveGrid,
    TeamMember,
} from '../../../components';

/*::
type TeamMembers = Array<{|
    name: string,
    photo: string,
    title?: string,
    bio: string,
    socialProfiles?: Object,
|}>
type GridProps = {|
    members: TeamMembers,
|}
type GridState = {|
    flipped: number,
|}
*/
const TeamGrid = class extends React.Component/*::<GridProps, GridState>*/ {
    state = {flipped: -1}

    flip = index => {
        let new_flipped = index;
        if (this.state.flipped === new_flipped) {
            new_flipped = -1;
        }
        this.setState({flipped: new_flipped});
    }

    render() {
        const {
            members,
        } = this.props;

        const {
            flipped,
        } = this.state;

        return (
            <ResponsiveGrid>{
                members.map((member, index) =>
                    <TeamMember key={ index }
                                onClick={ () => this.flip(index) }
                                className={ flipped === index ? "flip" : "" }
                                name={ member.name }
                                title={ member.title }
                                photo={ member.photo }
                                socialProfiles={ member.socialProfiles }>
                        { member.bio }
                    </TeamMember>
                )
            }</ResponsiveGrid>
        );
    }
};

export const TheTeam = translate('the_team')(({t, id}) => {
    const members = JSON.parse(t('team')).map(member =>
        ({
            name: t(`${ member }_name`),
            title: t(`${ member }_title`),
            photo: t(`${ member }_photo`),
            socialProfiles: {
                linkedin: t(`${ member }_social_linkedin`),
                twitter: t(`${ member }_social_twitter`),
                github: t(`${ member }_social_github`),
            },
            bio: t(`${ member }_bio`),
        })
    );

    return (
        <PageSection light id={ id } title={ t('title') }>
            <Text center>{ t('description') }</Text>
            <TeamGrid members={ members } />
        </PageSection>
    );
});
