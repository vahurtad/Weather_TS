import * as React from 'react';
import { AppLoading, Font } from 'expo';
// import AppN from '../App';
export interface Props {}
export interface State {
    isReady: boolean;
}
export default class Setup extends React.Component<Props, State> {
    state = {
        isReady: false
    };
    componentWillMount() {
        this.loadFonts();
    }
    async loadFonts() {
        await Font.loadAsync({
            'space-mono': require('./src/assets/fonts/SpaceMono-Regular.ttf')
        });
        this.setState({ isReady: true });
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading />;
        }
        return (
                {/* <AppN /> */}
        );
    }
}
