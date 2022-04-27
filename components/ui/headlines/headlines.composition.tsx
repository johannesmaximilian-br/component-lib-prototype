import React from 'react';
import { Headlines, HeadlineType } from './headlines';

export const BasicHeadlines = () => {
    return <Headlines text="Default Headline H2" />
}

export const BasicHeadlinesH1 = () => {
    return <Headlines text="Headline H1" headline={HeadlineType.H1} />
}


export const BasicHeadlinesH2= () => {
    return <Headlines text="Headline H2" headline={HeadlineType.H2} />
}

export const BasicHeadlinesH3= () => {
    return <Headlines text="Headline H3" headline={HeadlineType.H3} />
};

export const BasicHeadlinesH4= () => {
    return <Headlines text="Headline H4" headline={HeadlineType.H4} />
};

export const BasicHeadlinesH5= () => {
    return <Headlines text="Headline H5" headline={HeadlineType.H5} />
};