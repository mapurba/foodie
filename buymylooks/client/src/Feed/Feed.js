import React from 'react';
import { Image, Grid, List } from 'semantic-ui-react'


const Feed = ({ statee }) => (
    
        <Grid container columns={2}>
            <Grid.Row>
                <Grid.Column  width={4}>
                    <Image floated='right' size='small' circular src='https://react.semantic-ui.com/images/wireframe/square-image.png' />
                </Grid.Column>
                <Grid.Column >
                    <div>
                        <h2>mapurba</h2>
                        <List horizontal>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'>10 Rachel</List.Header>
                                    
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'>200 Rachel</List.Header>
                                    
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>
                                    <List.Header as='a'>3000 Rachel</List.Header>
                                    
                                </List.Content>
                            </List.Item>
                        </List>
                    </div>
                </Grid.Column>
            </Grid.Row>


        </Grid>

   

)

export default Feed;