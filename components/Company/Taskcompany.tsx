import React from 'react';
import { Layout, theme } from 'antd';
import { Table, Progress } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { DataType } from '@/types/backend';
import employee from '../../public/avatar.png';
import Image from 'next/image';
const { Content } = Layout;
const data: DataType[] = [];
for (let i = 1; i <= 6; i++) {
    const currentDate = new Date();
    const progress = Math.floor(Math.random() * 100);
    data.push({
        key: i,
        name: `Target ${i}`,
        personal: `Personal ${i}`,
        date: currentDate,
        progress: progress,
    });
}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        width: 15,
        dataIndex: 'key',
        key: 'key',
        fixed: 'left',
    },
    {
        title: 'Tên mục tiêu',
        width: 90,
        dataIndex: 'name',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'Nhân sự',
        dataIndex: 'personal',
        key: '1',
        width: 30,
        render: (text, record) => (
            <Image src={employee} alt={`Employee ${record.key}`} width={24} height={24} />
        ),
    },
    {
        title: 'Thời gian',
        dataIndex: 'date',
        key: '2',
        width: 40,
        render: (text) => text || '-',
    },
    {
        title: 'Tiến độ',
        dataIndex: 'progress',
        key: '3',
        width: 50,
        render: (progress) => (
            <Progress percent={progress} size="small" />
        ),
    },
];

export const AppCompany = () => {
    return (
        <Content style={{ margin: '16px 0' }}>
            <div style={{ fontWeight: '500', color: '#00009e', paddingBottom: '10px' }}>Mục tiêu công ty</div>
            <Table columns={columns} dataSource={data} scroll={{ x: 1200, y: 550 }} style={{ boxShadow: '1px 1px 5px #888888', borderRadius: '10px' }} />
        </Content>
    )
}
export default AppCompany;