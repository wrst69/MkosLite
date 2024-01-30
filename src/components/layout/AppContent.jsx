import { Layout, Divider, List, Typography, Spin} from 'antd';
import { useEffect, useState } from 'react';
import { fakeFetch } from '../../api';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#FFFFFF',
    padding: '1rem'
  };

export default function AppContent() {
    const [loading, setLoading] = useState(false);
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        async function preload() {
            setLoading(true);
            const { result } = await fakeFetch();

            setObjects(result);
            setLoading(false);
        }

        preload();
    }, [])

    if (loading) {
        return <Spin fullscreen/>
    }
    
    return (
        <Layout.Content style={contentStyle}>
            <Divider orientation="left">Объекты учета</Divider>
            <List
                size="small"
                dataSource={objects}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item.name}
                     </List.Item>
                )}
            />
        </Layout.Content>
    )
}