import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox-next'
import {PaletteTree} from './palette'
import ProjectsCard from "../ProjectsCard";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ProjectsCard">
                <ProjectsCard/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews